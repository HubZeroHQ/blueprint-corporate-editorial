# Healthcare Website Architecture

Healthcare websites exist to establish trust, reduce uncertainty, and make access to healthcare services simple.

Visitors are often anxious, unfamiliar with medical terminology, or seeking immediate assistance.

The architecture should reduce cognitive load rather than increase it.

# Classification

- **Kind:** profile
- **Parent:** `services`
- **Distinct on:** Trust mechanism — clinical credentials, care quality, and patient safety.
- **Composes with:** `booking`, `directory`
- **Modules:** locations, careers, faq, editorial, about, contact, legal

Canonical identity is recorded in `REGISTRY.md`. See `principles.md` — The Distinctness Test.

---

# Primary Objective

Build trust while helping visitors quickly find the healthcare service they require.

# Content Model

**Entities.** `Service` or specialty (slug, description, conditions treated, care pathway). `Practitioner` (name, credentials, specialties, locations). `Location` (facility, hours, accessibility, services offered). `Condition` (patient-facing explanation). `Question` (FAQ). `Article` (patient education). `Policy` (insurance, patient rights).

**Relationships.** Practitioners reference specialties and locations; services reference the conditions they treat and the locations offering them; conditions reference the services that address them.

**Derivation.** Service, practitioner, and location routes, metadata, sitemap, `MedicalOrganization` and `Physician` structured data, filter facets, and related content all derive from these records.

Patient-facing content should carry review metadata — who reviewed it and when — as fields on the record. Medical content that cannot state its review status is content a patient cannot weigh.

See `.hubzero/content/principles.md`.

---

# Information Hierarchy

A healthcare website should progressively communicate:

1. Immediate assistance and essential contact information
2. Healthcare provider introduction
3. Services offered
4. Medical professionals
5. Facilities and technology
6. Patient resources
7. Insurance or payment information
8. Appointment booking
9. Contact and location

# Design Direction

Healthcare interfaces should communicate:

* Safety
* Calmness
* Clarity
* Professionalism
* Compassion

Visual design should never create unnecessary stress or confusion.

# User Experience

Important actions should always remain obvious.

Patients should never struggle to:

* book an appointment,
* contact the provider,
* locate the clinic,
* or understand available services.

# Essential Pages

- Home
- About
- Services or specialties (index and detail)
- Practitioners (index and detail)
- Locations
- Conditions or patient information
- Insurance and payment
- Patients — preparing, rights, access
- Contact
- Accessibility statement
- Privacy, Terms

Plus modules — Careers is common. See `modules.md`.

---

# Navigation

Navigation must serve people who may be anxious, unwell, or acting for someone else. Clarity outranks every other consideration.

The three things a visitor most often needs — how to make contact, where to go, and whether a condition is treated — should each be reachable immediately from any page.

Organize by patient need rather than by clinical department structure. A visitor knows their symptom, not the specialty that owns it.

Accessibility information and language options must be prominent rather than relegated to the footer.

---

# Interaction Model

Interactions should be simple, forgiving, and never require precision.

The essential interactions are finding a practitioner, finding a location, and initiating contact or an appointment request.

Practitioner and service search benefits from filtering by specialty, location, and availability. Hold those filters in the URL — patients frequently share a result with a family member.

**Appointment booking almost always exceeds what a blueprint can honestly provide**, and this is the architecture where a simulated booking does the most harm. Where the blueprint composes with **Booking**, that architecture's honesty requirements apply in full. Where it does not, state plainly how an appointment is actually made.

---

# Trust Signals

Healthcare trust is clinical and practical at once.

**High priority**
- Practitioner credentials, qualifications, and registrations
- Accreditation and regulatory standing of the facility
- Clear care pathways: what happens, in what order
- Accessibility and language provision
- Transparent cost and insurance information

**Medium priority**
- Patient outcomes, where genuinely measurable and attributable
- Facility and equipment information
- Length of practice
- Professional affiliations

Never fabricate clinical outcomes, patient testimonials, or credentials, and never publish structured data describing them. This is the strictest instance of a rule that applies library-wide.

---

# Conversion Model

The terminus is a contact, an appointment request, or successfully finding the information a patient needed. Comprehension is a legitimate conversion here.

Reduce anxiety rather than applying pressure. A patient who understands what will happen, what it costs, and who they will see is a patient who acts.

Contact routes should be plural — phone, in person, and written — because patients differ in what they can use, and urgency differs by situation.

Emergency guidance must be unmissable and must direct people to real emergency services rather than to the site's own contact routes.

---

# Common States

Each of the following is authored content in the product's voice, designed before it occurs. See `.hubzero/content/principles.md` — Empty States Are Authored Content.

- **A service not offered at a given location.** Explicit rather than implied by absence.
- **A practitioner not currently accepting patients.**
- **A location with altered or emergency hours.**
- **A search returning no practitioners** for a specialty or area.
- **Patient content whose review date has lapsed.** An authored field, surfaced honestly.
- **The honest appointment boundary**, stated where a visitor would book. Non-negotiable in this architecture.
- **The fictional-organization disclosure**, wherever clinical claims might otherwise be inferred as real.

---

# Common Mistakes

- Organizing navigation by clinical department rather than by patient need
- Fabricated clinical outcomes, credentials, or patient testimonials
- Emergency guidance that is easy to miss, or that routes to the site's own contact instead of real emergency services
- Cost and insurance information left vague, which deters the patients least able to absorb surprise
- Accessibility and language provision relegated to the footer
- Patient-facing content with no review date, so a reader cannot weigh its currency
- Care pathways described in clinical terms a patient does not use
- Requiring precision — small targets, dense forms — from people who may be unwell or distressed
- A simulated appointment booking. In this architecture it is the most harmful simulation available, because a patient may believe they have an appointment

---

# Relationship to Other Architectures

Healthcare is a **profile of Services**, differing in trust mechanism: clinical credentials and care quality. Read `services.md` and `corporate.md` for the underlying journey.

**Booking** is the architecture Healthcare most often composes with, since appointment scheduling is a genuine availability problem rather than an enquiry.

**Directory** composes where a provider network must be searchable.

**Education** is a structural neighbour for teaching hospitals, which carry both patient and academic journeys.

---

# Definition of Success

Visitors should feel reassured, informed, and confident about receiving care.
