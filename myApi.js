const addTotalNumberOfFamilyMembers = async (families) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    families.forEach(family => {
      const totalMembers = 2 + family.childrenNumber;
      family.totalNumberOfFamilyMembers = totalMembers;
      if (family.fatherName && family.fatherName.toLowerCase() === 'yves') {
        throw new Error("Yves is not an allowed dad in 2022.");
      }
    });
  
    return families;
  };
  
  const myAPI = async () => {
    try {
      const families = [
        { fatherName: "John", motherName: "Mary", childrenNumber: 2 },
        { fatherName: "Yves", motherName: "Sophie", childrenNumber: 1 },
        { fatherName: "Peter", motherName: "Emma", childrenNumber: 3 }
      ];
  
      const updatedFamilies =await addTotalNumberOfFamilyMembers(families);
      console.log(updatedFamilies);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  
  myAPI();
  