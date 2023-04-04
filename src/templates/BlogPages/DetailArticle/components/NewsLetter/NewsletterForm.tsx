import * as Yup from 'yup';
import RHFTextField from '@/base/form/input/RHFTextField';
import FormProvider from '@/base/form/provider/FormProvider';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import RHFSubmitButton from '@/base/form/input/RHFSubmitButton';
import {RHFBooleanField} from '@/base/form';



// ----------------------------------------------------------------------

export default function NewsletterForm() {
    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .email("L'email doit être valide.")
            .required("L'email est requis."),
        consent: Yup.boolean()
            .oneOf(
                [true],
                "Coche cette case pour t'inscrire à la newsletter."
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
            /*await signIn('email', {
              redirect: false,
              email: data.email,
              consent: data.consent,
            });*/
            toast.success("C'est bon ! Tu es inscrit à la newsletter.");
        } catch (error) {
            console.error(error);
            reset();
        }
    };

    return (
        <>
            {/* Form */}
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <div className="flex w-full place-content-between gap-2">
                    <div className="w-full">
                        <div className="space-y-2">
                            <div className="grid sm:max-lg:flex gap-2">
                                {/* Input & AdminButton */}
                                <RHFTextField
                                    name="email"
                                    label=""
                                    placeholder="Entrez votre mail"
                                />

                                <RHFSubmitButton title="Je m'inscris" />
                            </div>


                            <RHFBooleanField
                                name="consent"
                                label="J'accepte sans réserve la "
                                type="checkbox"
                                destination="/legal/politique-de-confidentialite"
                                link=" politique de confidentialité"
                                defaultValue={defaultValues.consent}
                            />
                        </div>
                    </div>
                </div>
            </FormProvider>
        </>
    );
}
