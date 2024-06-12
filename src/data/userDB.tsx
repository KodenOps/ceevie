interface roletype {
	organization: string;
	roles: string;
	rstartDate: string;
	rendDate: string;
	achievementList: string[];
}
interface higherInstitution {
	name: string;
	Certificate_Held: string;
	hstartDate: string;
	hendDate: string;
}
interface CertificationType {
	name: string;
	year: string;
}
export interface secondarySchool {
	name: string;
	CertificateHeld: string;
	sstartDate: string;
	sendDate: string;
}

export interface userDBType {
	username: string;
	password: string;
	firstname: string;
	lastname: string;
	gender: string;
	email: string;
	eduLevel: string;
	countryCode: string;
	certAvailable: string;
	mobileNum: Number;
	addr: string;
	secondarySchool: secondarySchool;
	higherInstitution: higherInstitution;
	userRole: roletype[];
	skills: string[];
	Certification: CertificationType[];
	linkenIn: string;
	portfolio: string;
}
export const userDB: userDBType = {
	username: '',
	password: '',
	firstname: '',
	lastname: '',
	gender: '',
	email: '',
	eduLevel: '',
	countryCode: '+234',
	mobileNum: 4,
	addr: '',
	certAvailable: '',
	secondarySchool: {
		name: '',
		CertificateHeld: '',
		sstartDate: '',
		sendDate: '',
	},
	higherInstitution: {
		name: '',
		Certificate_Held: '',
		hstartDate: '',
		hendDate: '',
	},
	userRole: [
		{
			organization: '',
			roles: '',
			rstartDate: '',
			rendDate: '',
			achievementList: [''],
		},
	],
	skills: [],
	Certification: [{ name: '', year: '' }],
	linkenIn: '',
	portfolio: '',
};
