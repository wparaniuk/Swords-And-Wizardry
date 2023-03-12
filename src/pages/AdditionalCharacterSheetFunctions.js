import { LEVEL_MATRIX } from "./ExperienceTables";

export const calculateModifier = (value) => {
	//Values below 9 and above 12 will have modifier
  if (value < 9) return -1;
  else if (value > 12) return +1;
  else return 0;
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