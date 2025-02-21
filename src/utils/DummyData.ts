import {Activity, ActivityContent, ActivityItem, Admin, AdminItem, Member, Thing, ThingItem} from "@/utils/Interfaces";

/**
 * Activity 관련 더미데이터
 */

const ActivityListItem: ActivityItem = {
    content: "내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 \
    내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 \
    내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 \
    내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 \
    내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용",
    id: "ACTIVITY_ID",
    member: ["서유빈", "임수현", "정세린"],
    mentor: "유용민",
    tag: ["#TEST", "#TAG"],
    thumbnail: "BASE64_STRING",
    title: "Test Activity"
}

// Activity 리스트 더미데이터
export const ActivityListData: Activity = {
    count: 5,
    data: [ActivityListItem, ActivityListItem, ActivityListItem, ActivityListItem, ActivityListItem]
}

// Activity 상세보기 더미데이터
export const ActivityContentData: ActivityContent = {
    content: "내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 \
    내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 \
    내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 \
    내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 \
    내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용",
    id: "ACTIVITY_ID",
    photo: {count: 3, data: ["BASE64_STRING", "BASE64_STRING", "BASE64_STRING"]},
    role: [
        {
            member: [
                {icon: "BASE64_STRING", name: "유용민", url: "https://github.com/yymin1022"}
            ],
            title: "PM / Back-End"
        },
        {
            member: [
                {icon: "BASE64_STRING", name: "서유빈", url: "https://instagram.com/vini_u"}
            ],
            title: "Designer"
        },
        {
            member: [
                {icon: "BASE64_STRING", name: "임수현", url: "https://github.com/lims00"},
                {icon: "BASE64_STRING", name: "정세린", url: "https://github.com/sereene"}
            ],
            title: "Front-End"
        }
    ],
    tag: ["#TEST", "#TAG"],
    title: "Test Activity"
}

/**
 * Member 관련 더미데이터
 */
export const MemberData: Member = {
    comment: "집가고싶다",
    department: "소프트웨어학부 19학번",
    github: "yymin1022",
    id: "useful_min",
    instagram: "useful_min",
    name: "유용민",
    project: []
}

/**
 * Admin 관련 더미데이터
 */

const Admin2023_1: AdminItem = {
    member: MemberData,
    role: "회장"
}

const Admin2023_2: AdminItem = {
    member: MemberData,
    role: "부회장"
}

const Admin2024_1: AdminItem = {
    member: MemberData,
    role: "회장"
}

const Admin2024_2: AdminItem = {
    member: MemberData,
    role: "부회장"
}

const Admin2023: Admin = {
    list: [Admin2023_1, Admin2023_2, Admin2023_1, Admin2023_2],
    year: 2023
}

const Admin2024: Admin = {
    list: [Admin2024_1, Admin2024_2, Admin2024_1, Admin2024_2],
    year: 2024
}

// 운영진 더미데이터
export const AdminList: Array<Admin> = [Admin2024, Admin2023];

/**
 * Thing 관련 더미데이터
 */

const ThingItemData: ThingItem = {
    description: "한줄소개",
    id: "THING_ID",
    name: "서유빈이 잃어버린 갤럭시버즈 왼쪽",
    photo: "BASE64_STRING",
    tag: "#분실물"
}

// Thing 리스트 더미데이터
export const ThingData: Thing = {
    count: 5,
    data: [ThingItemData, ThingItemData, ThingItemData, ThingItemData, ThingItemData]
}