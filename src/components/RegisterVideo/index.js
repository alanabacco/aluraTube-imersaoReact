import { useState } from "react";
import { StyledRegisterVideo } from "./styles";
import { createClient } from "@supabase/supabase-js";

// Custom Hook
function useForm(props) {
  const [values, setValues] = useState(props.initialValues);

  return {
    values,
    handleChange: (e) => {
      // console.log(e.target);
      const value = e.target.value;
      const name = e.target.name;

      setValues({
        ...values,
        [name]: value,
      });
    },
    clearForm() {
      setValues({});
    },
  };
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// get youtube thumbnail from video url
function getThumbnail(url) {
  return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

export default function RegisterVideo() {
  const formRegister = useForm({
    initialValues: {
      title: "",
      url: "",
    },
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <StyledRegisterVideo>
      <button className="add-video-button" onClick={() => setIsFormVisible(true)}>
        +
      </button>

      {isFormVisible && (
        <form
          onSubmit={(e) => {
            e.preventDefault();

            // Contrato entre o nosso Front e o BackEnd
            supabase
              .from("videos")
              .insert({
                title: formRegister.values.title,
                url: formRegister.values.url,
                thumb: getThumbnail(formRegister.values.url),
                //playlistId: "", // TODO: MUDAR ISSO
              })
              .then((data) => {
                console.log(data);
              })
              .catch((err) => {
                console.log(err);
              });

            setIsFormVisible(false);
            formRegister.clearForm();
          }}
        >
          <div>
            <button
              type="button"
              className="close-modal"
              onClick={() => setIsFormVisible(false)}
            >
              X
            </button>
            <input
              required
              placeholder="Título do vídeo"
              name="title"
              value={formRegister.values.title}
              onChange={formRegister.handleChange}
            />
            <input
              required
              placeholder="URL"
              name="url"
              value={formRegister.values.url}
              onChange={formRegister.handleChange}
            />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  );
}
