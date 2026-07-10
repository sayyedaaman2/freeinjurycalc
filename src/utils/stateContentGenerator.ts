import { stateLegalDetails } from "../data/stateLegalDetails";

function formatUSD(num: number | null) {
  if (num === null) return "$0";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(num);
}

export function generateNegligenceContent(
  stateName: string,
  rule: string,
  statuteRef: string
): string {
  const commonIntro = `Under ${stateName} personal injury statutes (specifically governed by the provisions of ${statuteRef}), liability for a motor vehicle collision is decided by establishing fault. `;
  
  if (rule === "contributory") {
    return `${commonIntro}The jurisdiction of ${stateName} is one of the very few in the United States that strictly adheres to the traditional <strong>pure contributory negligence doctrine</strong>. Under this severe legal standard, if you are found to have contributed to the car accident in any way whatsoever—even if your share of blame is evaluated at a mere 1%—you are legally barred from recovering any financial compensation from the other driver. In practice, this makes it extremely critical to secure exhaustive documentation (such as dashcam footage, witness reports, and police files) proving the other motorist was 100% responsible for the collision. Insurance adjusters will search for any reason to assign a tiny fraction of fault to you to deny your claim.`;
  }
  
  if (rule === "pure") {
    return `${commonIntro}${stateName} utilizes a <strong>pure comparative negligence standard</strong>. Unlike contributory jurisdictions, this system allows you to recover compensation even if you were found to be mostly responsible for the collision (up to 99% at fault). However, your final financial award is docked in direct proportion to your share of the blame. For example, if you incur $10,000 in damages but are found 30% at fault for failing to brake in time, your net payout is limited to $7,000. Under this system, insurance companies will actively negotiate to inflate your fault percentage to minimize their net payout.`;
  }
  
  if (rule === "modified_50") {
    return `${commonIntro}${stateName} enforces a <strong>50% modified comparative negligence bar</strong>. Under this rule, you remain eligible to seek damages from the at-fault driver only if your share of responsibility is strictly less than 50% (49% or lower). If you split blame 50/50 or are found to carry the majority of fault, you are completely barred from obtaining any recovery. If you qualify for recovery under the 50% bar, your total settlement is reduced by your exact percentage of liability. For instance, if your claim is worth $50,000 and you are 20% at fault, you will receive $40,000. If you are 50% at fault, you receive $0.`;
  }
  
  if (rule === "modified_51") {
    return `${commonIntro}${stateName} applies a <strong>51% modified comparative negligence standard</strong> (proportionate responsibility rules). This framework allows you to collect compensation as long as your share of fault does not exceed 50%. A 50/50 fault split still allows for a partial recovery. However, if you are found 51% or more responsible for causing the crash, your claim is legally barred. Any recovery is reduced proportionally by your specific fault rating. For example, if you are found 50% responsible for a collision and your damages are $100,000, you will collect $50,000. If you are 51% responsible, you collect nothing.`;
  }
  
  return "";
}

export function generateInsuranceContent(
  stateName: string,
  noFault: boolean,
  pipLimit: number,
  verbalThreshold: boolean,
  monetaryThreshold: number | null,
  minInsurance: string
): string {
  const limitsIntro = `Every registered vehicle owner in ${stateName} must maintain minimum auto liability policy coverage, currently set at ${minInsurance}. `;
  
  if (!noFault) {
    return `${limitsIntro}As a traditional <strong>at-fault (tort) jurisdiction</strong>, the driver who caused the accident is financially liable for all subsequent damages. Following a crash, you have the immediate right to file a third-party claim against the negligent driver's liability insurance policy, or file a civil lawsuit in court to seek compensation for both economic losses (medical bills and lost wages) and non-economic damages (pain and suffering) without any statutory limits or PIP constraints. If the at-fault driver's policy is insufficient to cover your medical costs, you may look to your own Underinsured Motorist (UIM) policy for recovery.`;
  } else {
    const thresholdDesc = verbalThreshold
      ? "a serious injury verbal threshold, which requires proof of permanent physical impairment, significant scarring, or disfigurement to sue"
      : `a statutory monetary threshold, requiring your medical bills to exceed ${formatUSD(monetaryThreshold)} before you are eligible to bring a lawsuit`;

    return `${limitsIntro}Because ${stateName} operates under a <strong>no-fault auto insurance system</strong>, your first line of financial recovery is your own Personal Injury Protection (PIP) policy. Regardless of who caused the accident, your PIP insurer covers initial medical bills, diagnostic expenses, and wage replacement up to the statutory limit of ${formatUSD(pipLimit)}. You are legally restricted from bringing a lawsuit against the other motorist for non-economic pain and suffering unless your injuries satisfy the state's ${thresholdDesc}. If your injuries are minor, you must seek compensation solely through your own PIP coverage.`;
  }
}

export function generateStatuteContent(
  stateName: string,
  statuteOfLimitations: number,
  govDeadline: string
): string {
  return `To preserve your legal right to seek recovery in ${stateName}, you must file a personal injury lawsuit within a strict time frame. The standard statute of limitations for car accident claims is <strong>${statuteOfLimitations} years</strong> from the date of the collision. If you let this deadline expire without filing your civil complaint, you lose your right to sue permanently. Furthermore, if your accident involved a government vehicle or municipal entity (such as a city bus or state vehicle), you must file a formal administrative notice of claim much sooner, typically within <strong>${govDeadline}</strong> of the incident. This notice is a mandatory prerequisite to suing a government agency.`;
}

export function generateDamageCapContent(
  stateName: string,
  cap: number | null,
  damageCapExplanation: string | null
): string {
  if (cap !== null && damageCapExplanation) {
    return damageCapExplanation;
  }
  
  return `For standard passenger vehicle car accident claims, ${stateName} does not impose any statutory caps or legislative limits on general non-economic damages, which covers pain and suffering, emotional distress, loss of consortium, and reduced quality of life. The value of your pain and suffering compensation is evaluated based on the clinical severity of the injuries, the duration of your medical treatment, and the documented impact on your daily lifestyle. Juries and insurance adjusters use multipliers or daily rate estimations to value these subjective losses.`;
}

export function generateSummaryContent(
  stateName: string,
  explanation: string,
  majorCity: string,
  courtName: string
): string {
  return `${explanation} When negotiating an auto claim in ${stateName}, insurance adjusters will analyze police reports, scrutinize your treatment records, and calculate fault share. If you file a formal lawsuit in the ${courtName} (such as the court facility in ${majorCity}), having meticulous documentation (including diagnostic MRIs, doctor notes, and wage reports) is crucial to defend against adjusters trying to discount your claim value. An attorney can help compile this evidence to maximize your final payout.`;
}

export function generateSettlementExample(
  stateSlug: string,
  stateName: string,
  negligenceRule: string,
  damageCap: number | null,
  majorCity: string,
  courtName: string
): string {
  let explanation = "";
  
  // Custom math for the state page to show localized calculation
  let medicalBills = 15000;
  let lostWages = 5000;
  let multiplier = 2.5;
  let grossEconomic = medicalBills + lostWages;
  let painSuffering = medicalBills * multiplier;
  
  if (damageCap !== null && painSuffering > damageCap) {
    painSuffering = damageCap;
  }
  
  let grossSettlement = grossEconomic + painSuffering;
  
  let faultPct = 10;
  let faultDeduction = grossSettlement * (faultPct / 100);
  let netSettlement = grossSettlement - faultDeduction;
  
  if (negligenceRule === "contributory") {
    // Under contributory negligence, 10% fault means $0
    explanation = `Let's look at a localized settlement example. A driver is involved in a rear-end collision in <strong>${majorCity}, ${stateName}</strong>. They incur $15,000 in past medical treatments and $5,000 in lost income, resulting in $20,000 in economic losses. 
    Using a standard 2.5x multiplier for pain and suffering, the general damages would be valued at $37,500. 
    However, under ${stateName}'s strict pure contributory negligence standard:
    <ul class="list-disc pl-5 space-y-1 my-3">
      <li>Economic Losses (Medical + Wages): <strong>${formatUSD(grossEconomic)}</strong></li>
      <li>Pain and Suffering Valuation (2.5x Medical): <strong>${formatUSD(painSuffering)}</strong></li>
      <li>Gross Target Payout: <strong>${formatUSD(grossSettlement)}</strong></li>
      <li>Shared Fault Assessment (e.g. for a minor delay in braking): <strong>10% fault</strong></li>
      <li><strong>Final Net Settlement: $0 (Barred due to 1% contributory negligence threshold)</strong></li>
    </ul>
    Because a minor 10% share of responsibility bars recovery entirely, injury victims in ${stateName} must present clear police reports and witness testimony to prove they carry 0% fault.`;
  } else if (stateSlug === "british-columbia") {
    explanation = `Under British Columbia's Enhanced Care model, lawsuits for general damages are barred. Let's look at how benefits are structured for a crash in <strong>${majorCity}, B.C.</strong>:
    <ul class="list-disc pl-5 space-y-1 my-3">
      <li>Medical treatments (Physiotherapy, Chiropractic care, orthopedic consults): <strong>Covered 100% directly by ICBC (no caps)</strong></li>
      <li>Lost Wages: <strong>90% of net income replacement up to the statutory cap</strong></li>
      <li>Pain & Suffering / General Damage Lawsuit: <strong>$0 (Eliminated under no-fault)</strong></li>
      <li>Permanent Impairment Lump-sum Award: <strong>Calculated based on percentage of permanent physical functional loss</strong></li>
    </ul>
    Disputes in British Columbia are filed with the Civil Resolution Tribunal (CRT) rather than traditional courtrooms.`;
  } else {
    explanation = `Let's look at a localized settlement example. A driver is involved in an auto accident in <strong>${majorCity}, ${stateName}</strong>. They incur $15,000 in medical treatments and $5,000 in lost income, resulting in $20,000 in economic losses. 
    Applying a standard 2.5x multiplier, general pain and suffering damages are estimated at $37,500. 
    Under ${stateName}'s negligence rules (assuming the driver is found 10% responsible due to a minor driving reaction delay):
    <ul class="list-disc pl-5 space-y-1 my-3">
      <li>Economic Losses (Medical + Wages): <strong>${formatUSD(grossEconomic)}</strong></li>
      <li>Pain and Suffering Valuation (2.5x Medical): <strong>${formatUSD(painSuffering)}</strong></li>
      <li>Gross Settlement Payout Target: <strong>${formatUSD(grossSettlement)}</strong></li>
      <li>Fault Reduction (10% shared blame): <strong>-${formatUSD(faultDeduction)}</strong></li>
      <li><strong>Final Estimated Net Settlement: ${formatUSD(netSettlement)}</strong></li>
    </ul>
    This calculation forms the basis of the demand letter sent to the insurance company and would be filed in the ${courtName} if formal litigation is initiated.`;
  }
  
  return explanation;
}

export function generateFAQs(
  stateName: string,
  negligenceRule: string,
  statuteOfLimitations: number,
  damageCap: number | null,
  noFault: boolean,
  pipLimit: number,
  verbalThreshold: boolean,
  monetaryThreshold: number | null,
  statuteRef: string,
  courtName: string
): Array<{ question: string; answer: string }> {
  const faqs = [
    {
      question: `How is a car accident settlement calculated in ${stateName}?`,
      answer: `Settlements in ${stateName} are determined by combining your economic losses (including ambulance rides, hospital treatments, surgery, medications, and lost income) with non-economic damages (pain and suffering). To value pain and suffering, claims adjusters typically apply a multiplier of 1.5x to 5x your medical bills, depending on the severity of the injury. The final amount is then adjusted to match local negligence limits.`
    }
  ];

  // Negligence FAQ
  let negligenceAnswer = "";
  if (negligenceRule === "contributory") {
    negligenceAnswer = `Under ${stateName}'s strict pure contributory negligence rule, sharing even 1% of the fault for the crash completely bars you from recovering any compensation. You must prove the other motorist was 100% responsible to receive a payout.`;
  } else if (negligenceRule === "pure") {
    negligenceAnswer = `Under ${stateName}'s pure comparative negligence system, you can recover damages even if you are 99% responsible. However, your final payout is reduced in proportion to your fault. For example, if you are found 20% responsible for a collision, your settlement check will be docked by 20%.`;
  } else {
    const limitPct = negligenceRule === "modified_50" ? "50%" : "51%";
    const cutoffText = negligenceRule === "modified_50" ? "50% or more" : "51% or more";
    negligenceAnswer = `Under the ${limitPct} modified comparative negligence rule enforced by ${statuteRef}, you can recover compensation only if your fault is less than ${limitPct} (49% or less for the 50% bar, 50% or less for the 51% bar). If your share of responsibility meets or exceeds the threshold, you recover nothing. If you qualify for recovery, your award is reduced by your fault share.`;
  }

  faqs.push({
    question: `What happens if I share fault for an accident in ${stateName}?`,
    answer: negligenceAnswer
  });

  // Deadline FAQ
  faqs.push({
    question: `How long do I have to file a personal injury claim in ${stateName}?`,
    answer: `The standard statute of limitations to file a car accident lawsuit in the ${courtName} is <strong>${statuteOfLimitations} years</strong> from the date of the collision. If your claim is against a municipal or state government entity (e.g., a city transit bus), a notice of claim must be filed much earlier, in accordance with ${stateName} administrative deadlines.`
  });

  // Dynamic Q4: What damages can I recover?
  faqs.push({
    question: `What types of damages can I recover in a ${stateName} car accident claim?`,
    answer: `You can recover two categories of compensatory damages. <strong>Economic damages</strong> include concrete financial losses like ambulance fees, surgeries, physical therapy, prescription medication, lost wages, and vehicle repair costs. <strong>Non-economic damages</strong> cover subjective losses like physical pain, emotional distress, loss of life enjoyment, and loss of consortium.`
  });

  // Dynamic Q5: Passenger claims
  faqs.push({
    question: `Can I recover compensation if I was an injured passenger in ${stateName}?`,
    answer: `Yes. Passengers are almost never at fault for a car accident. In ${stateName}, you can file a claim against the insurance policy of the driver of the car you were in, or the policy of the other driver who caused the collision. If you have your own auto insurance policy, you may also access medical payments or PIP benefits.`
  });

  // Dynamic Q6: DMV/Police reporting
  faqs.push({
    question: `Do I need to file a police report or report the crash to the state in ${stateName}?`,
    answer: `Under ${stateName} law, you are generally required to report any motor vehicle accident to local police immediately if it results in bodily injury, death, or property damage exceeding statutory limits (typically $500 to $1,000). A formal police report serves as critical neutral evidence for your insurance settlement.`
  });

  // Dynamic Q7: Damage Caps
  let damageCapText = "";
  if (damageCap !== null) {
    damageCapText = `Yes. ${stateName} imposes statutory caps on certain non-economic damages, particularly under specific categories such as medical malpractice or against municipal government agencies. Under the code, these limits restrict general damages.`;
  } else {
    damageCapText = `No. ${stateName} does not impose legislative limits or caps on pain and suffering or general damages resulting from standard passenger vehicle car accidents. You can pursue the full value of your non-economic damages.`;
  }
  faqs.push({
    question: `Does ${stateName} place caps on pain and suffering damages?`,
    answer: damageCapText
  });

  // Dynamic Q8: Hiring a lawyer
  faqs.push({
    question: `How does hiring a personal injury lawyer affect my settlement in ${stateName}?`,
    answer: `Studies by the Insurance Research Council show that injury claimants represented by an attorney receive payouts 3 to 4 times higher on average than unrepresented claimants, even after paying attorney fees. A lawyer handles negotiations, gathers evidence, and files formal complaints in the ${courtName} to protect your rights.`
  });

  return faqs;
}
