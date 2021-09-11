export interface Diary {
  id?: string;
  title: string;
  type: 'private' | 'public'; //so the user can make either a private or public diary
  createdAt?: string;
  updatedAt?: string;
  userId?: string;
  entryIds: string[] | null;
}
