// Загальні типи, які використовуються в кількох компонентах
// Типи та інтерфейси, які стосуються лише одного компонента, оголошені безпосередньо у файлі цього компонента

export type VoteType = "good" | "neutral" | "bad";

export interface Votes {
  good: number;
  neutral: number;
  bad: number;
}

export interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}
