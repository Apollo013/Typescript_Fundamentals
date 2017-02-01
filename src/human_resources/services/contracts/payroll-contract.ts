export interface Earnings {
    Rate: number;
    PayType: number;    
};

export interface PayRollServiceContract {
    CalculatePay(earnings: Earnings, hoursWorked?: number) : number;
};
