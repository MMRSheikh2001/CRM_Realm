import java.util.ArrayList;
import java.util.List;

public class LeadService {

    private final List<Lead> leads = new ArrayList<>();

    public void save(Lead lead) {
        validate(lead);
        leads.add(lead);
    }

    public List<Lead> getAllLeads() {
        return this.leads;
    }

    public Priority calculatePriority(int score) {
        if (score >= 80) {
            return Priority.HOT;
        } else if (score >= 50) {
            return Priority.WARM;
        } else {
            return Priority.COLD;
        }
    }

    public void printAllLeads() {
        if (leads.isEmpty()) {
            System.out.println("There are no leads to show");

        } else {
            System.out.println("All Leads Are: ");
            System.out.println("============================================================");

            for (Lead lead : leads) {
                System.out.println(lead.getName() + " | " + lead.getEmail() + " | "
                        + lead.getScore() + " | " + calculatePriority(lead.getScore()));
            }
            System.out.println("============================================================");
        }
    }

    private void validate(Lead lead) {
        if (lead == null) {
            throw new IllegalArgumentException("Lead cannot be null.");
        }
        if (lead.getName() == null || lead.getName().trim().isEmpty()) {
            throw new IllegalArgumentException("Name cannot be empty.");
        }
        if (lead.getEmail() == null || lead.getEmail().trim().isEmpty()) {
            throw new IllegalArgumentException("Email cannot be empty.");
        }
        if (lead.getScore() == null || lead.getScore() < 0 || lead.getScore() > 100) {
            throw new IllegalArgumentException("Score must be a number from 0 to 100.");
        }
    }
}