export function useURL(url: string) {
    const u = new URL(url);
    const id = u.hostname.includes("youtu.be")
      ? u.pathname.slice(1)
      : u.searchParams.get("v");
  
    return id ? `https://www.youtube.com/embed/${id}` : url;
  }