// Définition des interfaces MajorCredits et MinorCredits avec une propriété unique "brand"
interface MajorCredits {
    credits: number;
    brand: "MajorCredits";
}

interface MinorCredits {
    credits: number;
    brand: "MinorCredits";
}

// Fonction pour sommer les MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "MajorCredits"
    };
}

// Fonction pour sommer les MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "MinorCredits"
    };
}

// Exemple d'utilisation
const major1: MajorCredits = { credits: 30, brand: "MajorCredits" };
const major2: MajorCredits = { credits: 40, brand: "MajorCredits" };
const minor1: MinorCredits = { credits: 20, brand: "MinorCredits" };
const minor2: MinorCredits = { credits: 10, brand: "MinorCredits" };

const totalMajorCredits = sumMajorCredits(major1, major2);
const totalMinorCredits = sumMinorCredits(minor1, minor2);

console.log(`Total Major Credits: ${totalMajorCredits.credits}`);
console.log(`Total Minor Credits: ${totalMinorCredits.credits}`);
