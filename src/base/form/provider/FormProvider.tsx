import PropTypes from 'prop-types';
// auth
import { FormProvider as Form } from 'react-hook-form';

// ----------------------------------------------------------------------

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
  methods: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
};

export default function FormProvider({ children, onSubmit, methods }) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit} className="w-full">
        {children}
      </form>
    </Form>
  );
}
