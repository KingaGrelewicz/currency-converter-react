export const formatDate = (date?: string | Date) => {
    if (!date) {
      return "Brak daty";
    }
  
    const dateObject = typeof date === "string" ? new Date(date) : date;
  
    return dateObject.toLocaleString(undefined, {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };