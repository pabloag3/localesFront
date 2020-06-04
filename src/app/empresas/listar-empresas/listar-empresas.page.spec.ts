import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarEmpresasPage } from './listar-empresas.page';

describe('ListarEmpresasPage', () => {
  let component: ListarEmpresasPage;
  let fixture: ComponentFixture<ListarEmpresasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarEmpresasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarEmpresasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
