import { TestBed } from '@angular/core/testing';

import { ImportacoesService } from './importacoes.service';

describe('ImportacoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImportacoesService = TestBed.get(ImportacoesService);
    expect(service).toBeTruthy();
  });
});
