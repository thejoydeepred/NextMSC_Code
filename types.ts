
export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
}

export interface SearchResult {
  text: string;
  sources: GroundingChunk[];
}

export interface ApiError extends Error {
  // Add any custom properties from API errors if they exist
}
