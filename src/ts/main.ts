class MathGcf {
    largerNumber: number;
    smallerNumber: number;
    gcf: number = -1; // Math term - GCF: Greatest Common Factor

    constructor(n1: number, n2: number) {
        n1 = Math.abs(n1);
        n2 = Math.abs(n2);

        if (n1 >= n2) {
            this.largerNumber = n1;
            this.smallerNumber = n2;
        }
        else { 
            this.largerNumber = n2;
            this.smallerNumber = n1;
        }
    }

    public getGcf() {
        this.findGcf();
        return this.gcf; 
    }

    private findGcf() {
        if ((this.largerNumber === 0) || (this.smallerNumber === 0)) {
            this.gcf = -1;
        }
        else if ((this.largerNumber === 1) || (this.smallerNumber === 1)) {
            this.gcf = 1;
        }
        else if (this.largerNumber === this.smallerNumber) {
            this.gcf = this.largerNumber;
        }
        else {
            let difference: number = this.largerNumber - this.smallerNumber;
            while ((this.largerNumber - this.smallerNumber) != this.smallerNumber) {
                if (difference > this.smallerNumber) {
                    this.largerNumber = difference; 
                }
                else {
                    this.largerNumber = this.smallerNumber;
                    this.smallerNumber = difference;
                }

                difference = this.largerNumber - this.smallerNumber;
            }

            this.gcf = difference;
        }
    }
}

const btnGcf = document.getElementsByClassName("btn__find-gcf")[0];
const input0 = document.getElementsByClassName("input__box--gcf")[0]! as HTMLInputElement;
const input1 = document.getElementsByClassName("input__box--gcf")[1]! as HTMLInputElement;

btnGcf.addEventListener("click", () => {
    const myMath = new MathGcf(+input0.value, +input1.value);
    const result = document.getElementsByClassName("output__box--gcf")[0].getElementsByTagName("p")[0];
    
    if(myMath.getGcf() != -1) {
        result.innerHTML = "The GCF of "
        + input0.value + " and " + input1.value + " is " + myMath.getGcf() + ".";
        result.style.color = "inherit";
    }
    else {
        result.innerHTML = "Either of the inputs cannot be zero."
        result.style.color = "#E82C0C"
    }
} );
