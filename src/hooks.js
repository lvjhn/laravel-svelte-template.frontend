
export const handle = async ({ event, resolve }) => {
  
  const response = await resolve(event, {
    /** Uncomment line below to disable ssr */
    // ssr: false,  
  });

  return response;
};
