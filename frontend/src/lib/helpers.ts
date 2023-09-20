const fetcher = async (query: string, variables?: Record<string, any>) => {
    const response = await fetch('/graphql', {  // Adjust the endpoint if it's different
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.errors[0].message || 'Something went wrong');
    }
  
    const data = await response.json();
    return data.data;
  };
  
  export { fetcher };
  