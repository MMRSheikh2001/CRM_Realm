import java.util.Scanner;

//Go to the project folder and open cmd and run these commands
// javac SimpleLeadTracker.java
//  java  SimpleLeadTracker

public class SimpleLeadTracker {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        LeadService service = new LeadService();

        System.out.println("Welcome to simple Lead Tracker");

        try {
            int input = 0;
            while (input != 3) {
                System.out.println();
                System.out.println();
                System.out.println("What would you like to do?");
                System.out.println("1. Save Lead");
                System.out.println("2. See all Leads");
                System.out.println("3. Exit");

                input = sc.nextInt();
                sc.nextLine();

                if (input == 1) {
                    System.out.print("Name: ");
                    String name = sc.nextLine();

                    System.out.print("Email: ");
                    String email = sc.nextLine();

                    System.out.print("Score (0-100): ");
                    String scoreText = sc.nextLine().trim();

                    Integer score = null;
                    if (!scoreText.isEmpty()) {
                        try {
                            score = Integer.parseInt(scoreText);
                        } catch (NumberFormatException e) {
                            System.out.println("Invalid input: score must be a whole number.");
                            continue;
                        }
                    }

                    Lead lead = new Lead();
                    lead.setName(name);
                    lead.setEmail(email);
                    lead.setScore(score);

                    try {
                        service.save(lead);
                        System.out.println("Lead saved.");
                    } catch (IllegalArgumentException e) {
                        System.out.println("Invalid input: " + e.getMessage());
                    }

                } else if (input == 2) {
                    service.printAllLeads();

                } else if (input == 3) {
                    System.out.println("Goodbye!");

                } else {
                    System.out.println("Invalid choice. Enter 1, 2 or 3.");
                }
            }
        } catch (Exception e) {
            System.out.println("Please enter numbers only where a number is needed. Program closed.");
        } finally {
            sc.close();
        }
    }
}