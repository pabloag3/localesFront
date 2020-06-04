import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerEmpresaPage } from './ver-empresa.page';

describe('VerEmpresaPage', () => {
  let component: VerEmpresaPage;
  let fixture: ComponentFixture<VerEmpresaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerEmpresaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerEmpresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
