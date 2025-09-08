import { useState } from "react";
import Button from "../components/common/Button";
import InputField from "../components/common/InputField";

export default function MemberEdit({ member = {}, onSave }) {
  const [form, setForm] = useState({
    name: member.name || "",
    fatherName: member.fatherName || "",
    address: member.address || "",
    phone: member.phone || "",
    nrc: member.nrc || "",
    gender: member.gender || "",
    birthdate: member.birthdate || "",
    marriageStatus: member.marriageStatus || "",
    organization: member.organization || "",
    orgMemberId: member.orgMemberId || "",
    height: member.height || "",
    weight: member.weight || "",
    otherSports: member.otherSports || "",
    healthConditions: member.healthConditions || "",
    surgeryExperience: member.surgeryExperience || "",
    doctorInstructions: member.doctorInstructions || "",
  });

  const handleChange = (key, value) => setForm({ ...form, [key]: value });
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Member</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* Basic Info */}
        <InputField label="Name" value={form.name} onChange={(e) => handleChange("name", e.target.value)} required />
        <InputField label="Father's Name" value={form.fatherName} onChange={(e) => handleChange("fatherName", e.target.value)} required />

        <InputField label="Address" value={form.address} onChange={(e) => handleChange("address", e.target.value)} required />
        <InputField label="Phone" type="tel" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} required />

        <InputField label="NRC" value={form.nrc} onChange={(e) => handleChange("nrc", e.target.value)} required />
        <select
          value={form.gender}
          onChange={(e) => handleChange("gender", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <InputField label="Birthdate" type="date" value={form.birthdate} onChange={(e) => handleChange("birthdate", e.target.value)} required />
        <select
          value={form.marriageStatus}
          onChange={(e) => handleChange("marriageStatus", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Marriage Status</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Divorced">Divorced</option>
        </select>

        {/* Optional Organization Fields */}
        <InputField label="Organization (optional)" value={form.organization} onChange={(e) => handleChange("organization", e.target.value)} />
        <InputField label="Organization Member ID (optional)" value={form.orgMemberId} onChange={(e) => handleChange("orgMemberId", e.target.value)} />

        {/* Physical Stats */}
        <InputField label="Height (cm)" type="number" value={form.height} onChange={(e) => handleChange("height", e.target.value)} />
        <InputField label="Weight (kg)" type="number" value={form.weight} onChange={(e) => handleChange("weight", e.target.value)} />

        {/* Optional Health/Sports Fields */}
        <InputField label="Other Sport Activities (optional)" value={form.otherSports} onChange={(e) => handleChange("otherSports", e.target.value)} />
        <InputField label="Health Conditions (optional)" value={form.healthConditions} onChange={(e) => handleChange("healthConditions", e.target.value)} />

        <InputField label="Surgery Experience (optional)" value={form.surgeryExperience} onChange={(e) => handleChange("surgeryExperience", e.target.value)} />
        <InputField label="Doctor's Instructions (optional)" value={form.doctorInstructions} onChange={(e) => handleChange("doctorInstructions", e.target.value)} />

        {/* Submit Button */}
        <div className="sm:col-span-2 flex justify-end mt-4">
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </div>
  );
}
