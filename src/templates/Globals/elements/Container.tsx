import clsx from 'clsx'

export function Container({className, color, children, id}) {
    return (
        <section className={color} id={id}>
            <div className=" px-4 sm:px-6 lg:px-8  ">
                <div className={clsx('mx-auto', className)}>
                    {children}
                </div>
            </div>
        </section>
    )
}
