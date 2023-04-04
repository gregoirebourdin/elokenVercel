import { m } from 'framer-motion';

export default function FormLayoutRow({ children }: any) {
  return <m.div className="grid gap-2 sm:grid-cols-2 sm:gap-4">{children}</m.div>;
}
