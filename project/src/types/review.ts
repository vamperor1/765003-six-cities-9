export type ReviewData = {
  id: number;
  comment: string;
  rating: number;
  resetForm: () => void;
  unblockForm: () => void
};
