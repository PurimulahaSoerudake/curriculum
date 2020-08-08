package check;
import constants.Constants;

public class Check {
    private static final String firstName = "Shimono";
    private static final String lastName = "Yudai";

    private static void printName(String first_Name,String last_Name) {
        System.out.println(first_Name + last_Name);
    }
    public static void main(String args[]) {
        System.out.print("printNameメソッド → ");
        printName(firstName, lastName);
        Pet pet = new Pet(Constants.CHECK_CLASS_JAVA, Constants.CHECK_CLASS_HOGE);
        pet.introduce();
        RobotPet robopet = new RobotPet(Constants.CHECK_CLASS_R2D2, Constants.CHECK_CLASS_LUKE);
        robopet.introduce();
    }
}
