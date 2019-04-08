import { TestBed } from '@angular/core/testing';

import { CursoActivateGuard } from './curso-activate-guard';

describe('CursoGuard', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CursoActivateGuard = TestBed.get(CursoActivateGuard);
    expect(service).toBeTruthy();
  });
});
