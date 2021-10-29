export class User {

    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    companyName: string;



    public static basicUserInfo : string[] = ["name", "email", "website"]
    public static detailedUserInfo : string[] = ["name", "email", "website", "companyName"]


}
