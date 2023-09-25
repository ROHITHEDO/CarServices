using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccessLayer.Migrations
{
    public partial class abcd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "TotalRent",
                table: "userTotalRent",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)");

            migrationBuilder.AlterColumn<long>(
                name: "TotalRent",
                table: "bookcar",
                type: "bigint",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "float");

            migrationBuilder.AlterColumn<string>(
                name: "Price",
                table: "bookcar",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "float");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f607f7ef-01df-4943-b46b-2726091e7697",
                column: "ConcurrencyStamp",
                value: "e0e2e832-5a3f-4ef0-bbbf-4a793cc16ade");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "b74ddd14-6340-4840-95c2-db12554843e5",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "e6c00974-cf50-4157-88fc-d7db9db9c6b6", "AQAAAAIAAYagAAAAEBoO44PKOhN4FMDFY5IW/b3L9DWPelJImII6Syn+yCBdDo/CXCtj/nDAJsqopvMV+g==", "b0a996c6-5872-4342-b99e-d0b9d10aad1c" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "TotalRent",
                table: "userTotalRent",
                type: "decimal(18,2)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<double>(
                name: "TotalRent",
                table: "bookcar",
                type: "float",
                nullable: false,
                oldClrType: typeof(long),
                oldType: "bigint");

            migrationBuilder.AlterColumn<double>(
                name: "Price",
                table: "bookcar",
                type: "float",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f607f7ef-01df-4943-b46b-2726091e7697",
                column: "ConcurrencyStamp",
                value: "ed863315-107e-4d9c-a42d-37a67abeff51");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "b74ddd14-6340-4840-95c2-db12554843e5",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "42e1220f-8cd7-424d-9d80-2a228dd07a71", "AQAAAAIAAYagAAAAEDayuce4QkM0k5/eO/4tiO7APQ7PLTYKamVPEPxjvFhIbhVJc/pFkgOaXGcZkZOBSg==", "a83ea7df-5fb3-4599-a4b5-2853d42deb44" });
        }
    }
}
