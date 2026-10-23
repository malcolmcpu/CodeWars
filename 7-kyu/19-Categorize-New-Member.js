// The Western Suburbs Croquet Club has two categories of membership, Senior
// and Open. They would like your help with an application form that will tell
// prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap
// greater than 7. In this croquet club, handicaps range from -2 to +26; the
// better the player the lower the handicap.

// Input:

// Input will consist of a list of pairs. Each pair contains information for a
// single potential member. Information consists of an integer for the person's
// age and an integer for the person's handicap.

// Output:

// Output will consist of a list of string values (in Haskell and C: Open or
// Senior) stating whether the respective member is to be placed in the senior
// or open category.

function openOrSenior(data) {
  let categories = [];

  for (const element of data) {
    if (element[0] >= 55 && element[1] > 7) {
      categories.push('Senior');
    } else categories.push('Open');
  }
  return categories;
}

//REFACTORED SOLUTION - Within the conditional, we can employ a ternary operator for better readability.

function openOrSenior(data) {
  let categories = [];

  for (const element of data) {
    element[0] >= 55 && element[1] > 7
      ? categories.push('Senior')
      : categories.push('Open');
  }
  return categories;
}

//SECOND REFACTORED SOLUTION - As our return is a new array, we can employ map to iterate through and then employ our ternary logic to decide which outputs are the array elements.

function openOrSenior(data) {
  return data.map((element) =>
    element[0] >= 55 && element[1] > 7 ? 'Senior' : 'Open',
  );
}
