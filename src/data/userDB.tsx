interface roletype {
	organization: string;
	roles: string;
	startDate: string;
	endDate: string;
	achievementList: string[];
}
interface higherInstitution {
	name: string;
	CertificateHeld: string;
	startDate: string;
	endDate: string;
}
interface CertificationType {
	name: string;
	year: string;
}
interface secondarySchool {
	name: string;
	CertificateHeld: string;
	startDate: string;
	endDate: string;
}
export interface userDBType {
	username: string;
	password: string;
	firstname: string;
	lastname: string;
	gender: string;
	email: string;
	eduLevel: string;
	mobileNum: Number;
	addr: string;
	secondarySchool: secondarySchool;
	higherInstitution: higherInstitution;
	role: roletype[];
	skills: string[];
	Certification: CertificationType[];
	linkenIn: string;
	portfolio: string;
}
export const userDB:userDBType = {
	username: '',
	password: '',
	firstname: '',
	lastname: '',
	gender: '',
	email: 'kjjk',
	eduLevel: '',
	mobileNum: 4,
	addr: '',
	secondarySchool: {
		name: '',
		CertificateHeld: '',
		startDate: '',
		endDate: '',
	},
	higherInstitution: {
		name: '',
		CertificateHeld: '',
		startDate: '',
		endDate: '',
	},
	role: [
		{
			organization: '',
			roles: '',
			startDate: '',
			endDate: '',
			achievementList: [''],
		},
	],
	skills: [],
	Certification: [{ name: '', year: '' }],
	linkenIn: '',
	portfolio: '',
};
