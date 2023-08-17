import Papa from "papaparse";

interface convertJsonToCsvProps {
  json: object[];
}
export default class HandlerJsonService {
  async convertJsonToCsv({ json }: convertJsonToCsvProps) {
    const csv = Papa.unparse(json);

    return csv;
  }
}
