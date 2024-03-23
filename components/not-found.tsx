const NotFound = ({
  error,
}: {
  error: { title: string; message: string; resolution: string };
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="my-4 text-4xl">😕</span>
      <p className="text-xl font-bold dark:text-white-smoke text-black">
        {error.title}
      </p>
      <p className="text-sm text-center text-silver mt-2 max-w-[500px]">
        {error.message} {error.resolution}
      </p>
    </div>
  );
};

export default NotFound;
