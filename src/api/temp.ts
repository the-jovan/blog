const fetchContentfulStuff = async () => {
  const res = await fetch(
    "https://cdn.contentful.com/spaces/mnybxqntz76m/environments/master/entries?access_token=9jWqaRLkA7rfSl9ZvzmvwvDM-DLU0ANH_SJesR5zWUA"
  );

  if (!res.ok) {
    throw new Error("errrlol");
  }

  return res.json();
};

const fetchContentfulThing = async ({ queryKey }: { queryKey: string[] }) => {
  const id = queryKey[1];
  const res = await fetch(
    `https://cdn.contentful.com/spaces/mnybxqntz76m/environments/master/entries/${id}?access_token=9jWqaRLkA7rfSl9ZvzmvwvDM-DLU0ANH_SJesR5zWUA`
  );

  if (!res.ok) {
    throw new Error("phail");
  }

  return res.json();
};

const fetchImage = async ({ queryKey }: any) => {
  const id = queryKey[1];
  const res = await fetch(
    `https://images.ctfassets.net/mnybxqntz76m/${id}/twitter-card.png`
  );

  if (!res.ok) {
    throw new Error("phail");
  }

  return res.json();
};

export { fetchContentfulStuff, fetchContentfulThing, fetchImage };
