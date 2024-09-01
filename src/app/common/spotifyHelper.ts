import { IUser } from "../interface/IUser";

export function SportifyUserProfile(user: SpotifyApi.CurrentUsersProfileResponse): IUser {
    return {
        id: user.id,
        nome: user.display_name,
        imagemUrl: user.images.pop().url

    }
}