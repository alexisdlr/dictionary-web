import dynamic from 'next/dynamic';

const Loader = () => {
  return (
    <DynamicLoader />
  );
};

const DynamicLoader = dynamic(() => import('./dynamic-loader'), { ssr: false });

export default Loader;
