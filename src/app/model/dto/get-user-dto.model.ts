
import { User } from "../user.model";
import { GetAddressDto } from "./get-address-dto.model";
import { GetCompanyDto } from "./get-company-dto.model";

export class GetUserDto {
    id: number;
    name: string;
    username: string;
    email: string;
    address: GetAddressDto;
    phone: string;
    website: string;
    company: GetCompanyDto;


    public static toUser(dto :GetUserDto ) : User{
        let user  = new User();
        user.id = dto.id;
        user.name = dto.name;
        user.username = dto.username;
        user.email = dto.email;
        user.website = dto.website;
        user.companyName = dto.company.name;
        return user;
        
    }

}
