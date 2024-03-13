import { userSearch } from "@/lib/user-search";
import { ResultBanner } from "./result-banner";

export const Results = async ({ term }) => {
    const data = await userSearch(term);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">
      Results for search: &quot;{term}&quot;
      </h2>
      {data.length === 0 && (
        <p className="text-muted-foreground text-sm">
          No results found. Try searching for something else
        </p>
      )}
      <div className="flex flex-col gap-y-4">
        {data.map((result) => (
          <ResultBanner data={result} key={result.id} />
        ))}
      </div>
    </div>
  );
};

