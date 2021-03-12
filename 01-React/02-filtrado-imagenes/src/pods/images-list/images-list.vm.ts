export interface Image {
  id: number;
  title: string;
  fileName: string;
  category: string;
  checked: boolean;
}

export const createEmptyImage = (): Image => ({
  id: 0,
  title: '',
  fileName: '',
  category: '',
  checked: false,
});
