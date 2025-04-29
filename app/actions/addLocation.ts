'use server';

import {createClient} from "@/utils/supabase/server";

export async function createLocation(city_name: string) {
    const supabase = await createClient();
    const res = await supabase.auth.getSession();
    let user_id;
    if(res.data.session) {
        user_id = res.data.session.user.id;
    }
    const body = {user_id, city_name};
    const {data, error } = await supabase.from('locations').insert([body]).select();
    if(error) throw new Error(error.message);
    return data;
}