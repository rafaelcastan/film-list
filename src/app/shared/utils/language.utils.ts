import { Language } from '../models/language.enum';

export function unitToSymbol(unit: Language): string {
  switch (unit) {
    case Language.Portuguese:
      return 'pt-BR';
    case Language.English:
      return 'en-US';
  }
}