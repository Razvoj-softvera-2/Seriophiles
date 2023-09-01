using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace IdentityServer.Migrations
{
    public partial class AddedRefreshTokensToUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "be5d8e6c-93e2-482f-9666-087867147237");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f1c99581-324f-4292-9ca7-1608b80f06c1");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "9baae547-84f6-404c-ad22-22df28ab5381", "496b82a0-6b7e-4057-84c8-927a27867eb2", "Administrator", "ADMINISTRATOR" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "ee0c4df7-14c3-42a1-83f5-64bfdebea3a8", "2978ad2c-f540-45a2-a2c0-4ccba1f7c2ca", "User", "USER" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9baae547-84f6-404c-ad22-22df28ab5381");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ee0c4df7-14c3-42a1-83f5-64bfdebea3a8");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "be5d8e6c-93e2-482f-9666-087867147237", "34b39081-9e86-48d6-8abe-36d0d6bc908d", "User", "USER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "f1c99581-324f-4292-9ca7-1608b80f06c1", "15efcf12-49a4-4a37-90b6-4bd418d565e1", "Administrator", "ADMINISTRATOR" });
        }
    }
}
