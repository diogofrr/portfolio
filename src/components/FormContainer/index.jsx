/* eslint-disable no-unused-vars */
import { useForm } from 'react-hook-form';
import { NeonBtn } from '../NeonBtn';
import './styles.css';

export const FormContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <div className="contact-form__form-group">
        <label className="form-group__label" htmlFor="nome">
          Nome
        </label>
        <input
          className="form-group__input"
          type="text"
          id="nome"
          placeholder="Insira seu nome aqui"
          {...register('nome', { required: true, pattern: /^[A-Za-z]+$/i })}
        />
        {errors.nome && <span className="form-group__error">Este campo é obrigatório e aceita somente letras.</span>}
      </div>

      <div className="contact-form__form-group">
        <label className="form-group__label" htmlFor="sobrenome">
          Sobrenome
        </label>
        <input
          className="form-group__input"
          type="text"
          id="sobrenome"
          placeholder="Insira seu sobrenome aqui"
          {...register('sobrenome', { required: true, pattern: /^[A-Za-z]+$/i })}
        />
        {errors.sobrenome && (
          <span className="form-group__error">Este campo é obrigatório e aceita somente letras.</span>
        )}
      </div>

      <div className="contact-form__form-group">
        <label className="form-group__label" htmlFor="email">
          Email
        </label>
        <input
          className="form-group__input"
          type="email"
          id="email"
          placeholder="Insira seu email aqui"
          {...register('email', {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors.email && (
          <span className="form-group__error">Este campo é obrigatório e deve ser um email válido.</span>
        )}
      </div>

      <div className="contact-form__form-group">
        <label className="form-group__label" htmlFor="assunto">
          Assunto
        </label>
        <input
          className="form-group__input"
          placeholder="Insira o assunto aqui"
          type="text"
          id="assunto"
          {...register('assunto', { required: true })}
        />
        {errors.assunto && <span className="form-group__error">Este campo é obrigatório.</span>}
      </div>

      <div className="contact-form__form-group">
        <label className="form-group__label" htmlFor="mensagem">
          Mensagem
        </label>
        <textarea
          placeholder="Insira sua mensagem aqui"
          rows={15}
          className="form-group__textarea"
          id="mensagem"
          {...register('mensagem', { required: true })}
        />
        {errors.mensagem && <span className="form-group__error">Este campo é obrigatório.</span>}
      </div>
      <button className="contact-form__button" type="submit">
        Enviar
      </button>
      {/* <NeonBtn color="var(--corfuncional)" text="Enviar" type="submit"  link="false" /> */}
    </form>
  );
};
