export const MainPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-[auto_1fr]">
        <section className="p-[16px] border-r border-zinc-700">side section</section>
        <section className="p-[16px] bg-zinc-800 text-zinc-100">main section</section>
      </div>
    </Layout>
  );
};

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  return <div className="min-h-dvh bg-zinc-900 text-zinc-400 grid">{props.children}</div>;
};
