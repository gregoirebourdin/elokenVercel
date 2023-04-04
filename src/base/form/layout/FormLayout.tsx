import { m } from 'framer-motion';

export default function FormLayout({ children }: any) {
  return (
    <div className="flex w-full place-content-between gap-2">
      <m.div className="w-full">
        <div className="space-y-2">{children}</div>
      </m.div>
    </div>
  );
}
