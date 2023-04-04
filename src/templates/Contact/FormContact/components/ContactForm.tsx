import * as Yup from 'yup';
import RHFTextField from '@/base/form/input/RHFTextField';
import FormProvider from '@/base/form/provider/FormProvider';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import RHFSubmitButton from '@/base/form/input/RHFSubmitButton';
import {FormLayout, FormLayoutRow, RHFBooleanField, RHFTextAreaField} from '@/base/form';
import {errorMessage} from '@/base/errors/Message';
import axios from "axios";
import {useRouter} from "next/router";

// ----------------------------------------------------------------------

export default function NewsletterForm({launch}) {
    const {push} = useRouter();

    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .email(errorMessage.email.email)
            .required(errorMessage.email.required),
        name: Yup.string()
            .required(errorMessage.name.required),
        text: Yup.string()
            .required(errorMessage.contenu.required),
        consent: Yup.boolean()
            .oneOf(
                [true],
                errorMessage.boolean.required
            )
            .required(),
    });

    const defaultValues = {
        email: '',
        consent: false,
    };

    const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues,
        mode: 'onChange',
    });

    const {reset, handleSubmit} = methods;


    const onSubmit = async data => {
        try {

            // Send data to API /contact with axios
            await axios.post('/api/contact', data);
            toast.success("Votre message a été envoyé avec succès.");
            push("/")
        } catch (error) {
            console.error(error);
            toast.error("Une erreur est survenue lors de l'envoi de votre message.");
            reset();
        }
    };

    return (
        <>
            {/* Form */}
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <FormLayout>
                    {/* Input & AdminButton */}
                    <FormLayoutRow>
                        <RHFTextField
                            name="name"
                            label="Votre nom"
                            placeholder="Max La Menace"
                        />

                        <RHFTextField
                            name="email"
                            label="Votre Email"
                            placeholder="contact@mail.com"
                        />
                    </FormLayoutRow>

                    <RHFTextAreaField
                        name="text"
                        label="Votre message"
                        placeholder="Entrez votre message"
                    />

                    <RHFBooleanField
                        theme={'dark'}
                        name="consent"
                        label="J'accepte sans réserve la politique de confidentialité de la newsletter."
                        type="checkbox"
                        destination="/legal/politique-de-confidentialite"
                        link="Voir la politique de confidentialité"
                        defaultValue={defaultValues.consent}
                    />

                    <RHFSubmitButton title="Envoyer" theme={'dark'}/>
                </FormLayout>

            </FormProvider>
        </>
    );
}
