// src/data/planData.ts
import plan from './data.json';

export interface Meal {
    desayuno: string;
    comida: string;
    cena: string;
}

export interface Week {
    lunes: Meal;
    martes: Meal;
    miercoles: Meal;
    jueves: Meal;
    viernes: Meal;
    sabado: Meal;
    domingo: Meal;
}

export interface Calendario28Dias {
    semana_1: Week;
    semana_2: Week;
    semana_3: Week;
    semana_4: Week;
}

export interface ReglasOro {
    tú: string;
    ella: string;
    vegetales: string;
    grasas: string;
}

export interface RecetaMaestro {
    nombre: string;
    porciones: {
        tú: string;
        pareja: string;
    };
    instrucciones: string;
    fuente?: string; // `fuente` is optional as it might not be present for all recipes
}

export interface SnackPostre {
    nombre: string;
    receta: string;
}

export interface Smoothie {
    nombre: string;
    ingredientes: string;
}

export interface PlanAlimentacion {
    nombre: string;
    objetivos: string[];
    reglas_oro: ReglasOro;
    calendario_28_dias: Calendario28Dias;
    recetario_maestro: RecetaMaestro[];
    snacks_y_postres: SnackPostre[];
    smoothies: Smoothie[];
}

export const mealPlan: PlanAlimentacion = (plan as any).plan_alimentacion;
