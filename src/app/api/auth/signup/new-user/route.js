import connectDB from "../../../../../lib/connectDB";

export const POST = async (request) => {
   try {
    const db = await connectDB();
    const usersCollection = db.collection("users");
    const newUser = await request.json();
    const result = await usersCollection.insertOne(newUser);
    return Response.json({
      message: "User created successfully",
      success: true,
    });
    
   } catch (error) {
    return Response.json({
      message: "User creation failed",
      success: false,
    });
    
   }
};
