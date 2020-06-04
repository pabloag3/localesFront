import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarEmpresasPage } from './editar-empresas.page';

describe('EditarEmpresasPage', () => {
  let component: EditarEmpresasPage;
  let fixture: ComponentFixture<EditarEmpresasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarEmpresasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarEmpresasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
