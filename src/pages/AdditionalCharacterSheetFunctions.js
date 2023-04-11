import { LEVEL_MATRIX } from "./ExperienceTables";

export const calculateModifier = (value) => {
  //-3 dla wartości atrybutu 3 i mniej
  //-2 dla wartości atrybutu 4-6
  //-1 dla wartości atrybutu 7-9
  //0 dla wartości atrybutu 10-11
  //+1 dla wartości atrybutu 12-14
  //+2 dla wartości atrybutu 15-17
  //+3 dla wartości atrybutu 18 i więcej
  if (value <= 3) return "-3";
  else if (value >= 4 && value <= 6) return "-2";
  else if (value >= 7 && value <= 9) return "-1";
  else if (value >= 10 && value <= 11) return "0";
  else if (value >= 12 && value <= 14) return "+1";
  else if (value >= 15 && value <= 17) return "+2";
  else if (value >= 18) return "+3";
}

export const calculateLevel = (exp, charClass) => {
	if (charClass == 'None') return 1;
  const levels = LEVEL_MATRIX[charClass];
  let level = 1;

  levels.forEach(([minExp, maxExp, lvl]) => {
    if (exp >= minExp && exp < maxExp) {
      level = lvl;
    }
  });
  return level;
}

export const calculateHealth = (currentHealth, charClass, exp, conMod) => {
	const dices = LEVEL_MATRIX[charClass];
	let result = 1;

	dices.forEach(([minExp, maxExp, lvl, dice]) => {
		if (exp >= minExp && exp < maxExp) {
      if (dice.includes("+")) {
				const parts = dice.split('+');
				for (let i = 0; i < parts[0]; i++) {
					result += Math.floor(Math.random() * 6) + 1;
          result += conMod;
				}
				result += parseInt(parts[1]);
			}
			else {
				for (let i = 0; i < dice; i++) {
					result += Math.floor(Math.random() * 6) + 1;
          result += conMod;
				}
			}
    }
	})
	if (result >= currentHealth) return result;
	else return currentHealth;
}

export const calculateRO = (exp, charClass) => {
	if (charClass == 'None') return 1;
  const levels = LEVEL_MATRIX[charClass];
  let ro = 1;

  levels.forEach(([minExp, maxExp, lvl, dices, atk, roVal]) => {
    if (exp >= minExp && exp < maxExp) {
      ro = roVal;
    }
  });
  return ro;
}

export const calculateAtk = (exp, charClass) => {
	if (charClass == 'None') return 1;
  const levels = LEVEL_MATRIX[charClass];
  let attack = 1;

  levels.forEach(([minExp, maxExp, lvl, dices, atkVal, roVal]) => {
    if (exp >= minExp && exp < maxExp) {
      attack = atkVal;
    }
  });
  return attack;
}